function(o) {

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

  if (o.corpus_name) {
  	emit ([o.corpus_name], {"name": o.corpus_name});

  	if (o.users) {
	  	for (var i = 0; i < o.users.length; i++)
	  		emit([o.corpus_name], {"user": o.users[i]});
	  }
  }

  else if(o._attachments){
    //item name, thumbnail and resource
    emit(["UTT", o._id], {
      name:o.item_name,
      thumbnail:o.thumbnail,
      resource:o.resource
    });
    //item topics
    for (var t in o.topics) {
      var viewpoint_id = o.topics[t].viewpoint;
      emit(["UTT", o._id], {topic:{
        viewpoint: viewpoint_id,
        id: t
      }, _id: viewpoint_id});
    }
    //item highlights
    for (var h in o.highlights) {
      var highlight = o.highlights[h];
      emit(
        ["UTT", o._id, h], {
          coordinates: highlight.coordinates,
          topic: {
            viewpoint: highlight.viewpoint,
            id: highlight.topic
          },
          thumbnail: highlight.thumbnail,
          text: highlight.text
        }
      );
    }
    //item attributes
    for (var key in o) {
      if (!isReserved(key)) {
        var entry = {};
        entry[key] = o[key];
        emit(["UTT", o._id], entry);
      }
    }
  }
}
