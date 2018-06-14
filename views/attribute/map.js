function (o) {
  if(o._attachments){
    for each (c in o['DC.creator']) {
      var i = c.indexOf(" ");
      emit(["creator", c.slice(i+1), c.slice(0,i)]);
    }

    if (o['DC.issued']) {
      emit(["issued", o['DC.issued']]);
    }

    if (o['DC.title']) {
      emit(["title", o['DC.title']]);
    }

    if (o['DC.relation.ispartof']) {
      emit(["relation.ispartof", o['DC.relation.ispartof']]);
    }

    if (o['DC.citation.volume']) {
      emit(["citation.volume", o['DC.citation.volume']]);
    }

    if (o['DC.citation.issue']) {
      emit(["citation.issue", o['DC.citation.issue']]);
    }

    if (o['DC.citation.spage']) {
      emit(["citation.spage", o['DC.citation.spage']]);
    }

    if (o['DC.citation.epage']) {
      emit(["citation.epage", o['DC.citation.epage']]);
    }

    if (o['DC.publisher']) {
      emit(["publisher", o['DC.publisher']]);
    }

    if (o['url']) {
      emit(["url", o['url']]);
    }

    for each (c in o['DC.indexed']) {
      emit(["indexed", c['indexed']]);
    }

    if (o['aeresType']) {
      emit(["aeresType", o['aeresType']]);
    }

    if (o['abstract']) {
      emit(["abstract", o['abstract']]);
    }

    for each (c in o['DC.affiliation']) {
      emit(["affiliation", o['affiliation']]);
    }
  }
}
