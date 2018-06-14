function (o) {
  if(o._attachments){
    for each (c in o['DC.creator']) {
      var i = c.indexOf(" ");
      emit(["UTT", "creator", c.slice(i+1), c.slice(0,i)]);
    }

    if (o['DC.issued']) {
      emit(["UTT", "issued", o['DC.issued']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.title']) {
      emit(["UTT", "title", o['DC.title']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.relation.ispartof']) {
      emit(["UTT", "relation.ispartof", o['DC.relation.ispartof']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.citation.volume']) {
      emit(["UTT", "citation.volume", o['DC.citation.volume']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.citation.issue']) {
      emit(["UTT", "citation.issue", o['DC.citation.issue']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.citation.spage']) {
      emit(["UTT", "citation.spage", o['DC.citation.spage']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.citation.epage']) {
      emit(["UTT", "citation.epage", o['DC.citation.epage']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['DC.publisher']) {
      emit(["UTT", "publisher", o['DC.publisher']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['url']) {
      emit(["UTT", "url", o['url']], {item:{id:o._id, name: o.item_name}});
    }

    for each (c in o['DC.indexed']) {
      emit(["UTT", "indexed", c['indexed']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['aeresType']) {
      emit(["UTT", "aeresType", o['aeresType']], {item:{id:o._id, name: o.item_name}});
    }

    if (o['abstract']) {
      emit(["UTT", "abstract", o['abstract']], {item:{id:o._id, name: o.item_name}});
    }

    for each (c in o['DC.affiliation']) {
      emit(["UTT", "affiliation", o['affiliation']], {item:{id:o._id, name: o.item_name}});
    }
  }
}
