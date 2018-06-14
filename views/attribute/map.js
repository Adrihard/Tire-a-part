function (o) {

  function isReserved(key) {
    switch (key) {
      case "_id":
      case "_rev":
      case "_attachments":
      case "_deleted_conflicts":
      case "_conflicts":
      case "item_corpus":
      case "item_name":
      case "thumbnail":
      case "resource":
      case "topics":
      case "highlights": return true;
    }
    return false;
  }

  if(o._attachments){
    for (key in o) {
      if (!isReserved(key)) {
        value = o[key];
        if (typeof value=="string") {
          emit(
            ["UTT", key, value],
            {item:{id:o._id, name: o.item_name}}
          );
        } else {
          for each (v in value) {
            emit(
              ["UTT", key, v],
              {item:{id:o._id, name: o.item_name}}
            );
          }
        }
      }
    }
  }
}
