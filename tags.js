$ && $(function(){
	var tag_elements = [];

	var push_tag = function($target,new_tag){
		var data_tags = $target.data('tags') || '';
		console.log(data_tags)
		var tag_array = data_tags.split(",");
		console.log(tag_array);
		tag_array.push(new_tag)
		console.log(tag_array);
		tag_array = $.grep(tag_array, function(v,i){
			console.log(v,$.inArray(v,tag_array),tag_array, v == '');
			if(v == '') return false;
		    return $.inArray(v,tag_array) === i
		});
		

		$target.data('tags',tag_array.join(',') );
	}
	var record_tags = function(e){
		$.each($(e.target).val().split(/,/),function(i,v){
			if($.trim(v) != '') {
				push_tag($(e.target),v)
				console.log("Tag Added", $.trim(v)  );
			}
		});
		$(e.target).val('');
	}

	$('.tag-entry').keyup(function(e){
		if( $(e.target).val().slice(-1) == ','){
			record_tags(e);
		}
	}).blur(record_tags).keypress(function(e){
		if (e.keyCode == 13) record_tags(e);
		return e.keyCode != 13;
	}).each(function(i,v){
		tag_elements.push(v);
	}) 
})