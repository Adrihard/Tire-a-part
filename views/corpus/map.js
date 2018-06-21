function(o) {

  function isReserved(key) {
    switch (key) {
      case "_id":
      case "_rev":
      case "_attachments":
      case "_deleted_conflicts":
      case "_conflicts": return true;
    }
    return false;
  }

  
   if(o._attachments){
    //item name, thumbnail and resource
    emit(["UTT", o._id], {
      Authors: o["DC.creator"],
      Title: o["DC.title"],
      Abstract: o["abstract"],
      ispartof: o["DC.relation.ispartof"],
      volume: o["DC.citation.volume"],
      issue: o["DC.citation.issue"],
      spage: o["DC.citation.spage"],
      epage: o["DC.citation.epage"],
      publisher: o["DC.publisher"],
      Year: o["DC.issued"],
      indexed: o.indexed,
      aeresType: o.aeresType,
      name: "tata",
      thumbnail: "yoyo"
    });

    //item attributes
/*    for (var key in o) {
      if (!isReserved(key)) {
        var entry = {};
        entry[key] = o[key];
        emit(["UTT", o._id], entry);
      }
    }*/
  }
}
