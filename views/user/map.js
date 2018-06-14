function(o) {
    if (o.viewpoint_name) {
      emit(["open-access"], {viewpoint:{id:o._id, name:o.viewpoint_name}, _id:o._id});
    }

    else if (o.corpus_name) {
      emit(["open-access"], {corpus:{id:o._id, name:o.corpus_name}});
    }
}