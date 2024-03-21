
en4.pin = {

  like: function(link) { 
	var pin_id = link.getParent('.pin_box').get('id').replace('pin_box_','');
	this.post(link.get('href'), 'pin_like_' + pin_id);
	
	if (link.hasClass('pin_control_button_like')) {
	  link.removeClass('pin_control_button_like').addClass('pin_control_button_unlike');
	}
	else {
	  link.removeClass('pin_control_button_unlike').addClass('pin_control_button_like');
	}
	
	return false;
  },
		
  likeBoard: function(link, result) { 
	  
	if (result) {
	  this.post(link.get('href'), result);	
	}  
	else {
	  this.post(link.get('href'));
	}
	
	if (link.hasClass('pin_control_button_like')) {
	  link.removeClass('pin_control_button_like').addClass('pin_control_button_unlike');
	}
	else {
	  link.removeClass('pin_control_button_unlike').addClass('pin_control_button_like');
	}
	
	return false;
  },
  
  likePin: function(link, result) { 
	  
	if (result) {
	  this.post(link.get('href'), result);	
	}  
	else {
	  this.post(link.get('href'));
	}
	
	if (link.hasClass('pin_control_button_like')) {
	  link.removeClass('pin_control_button_like').addClass('pin_control_button_unlike');
	}
	else {
	  link.removeClass('pin_control_button_unlike').addClass('pin_control_button_like');
	}
	
	return false;
  },
  
  
  add: function(guid) {
	  
	var url = en4.core.baseUrl + 'pins/add/subject/' + guid;
	var container = $('pin_button_global_resource_' + guid);
	this.post(url, container);  

  },
	
  remove: function(guid) {
	  
	var url = en4.core.baseUrl + 'pins/remove/subject/' + guid;
	var container = $('pin_button_global_resource_' + guid);
	this.post(url, container);  

  },
  
  post: function(url, container) {
	  
    if( !en4.user.viewer.id ) {
      window.location.href = en4.core.baseUrl + 'login' + '?return_url=' + encodeURIComponent(window.location.href);
      return false;
    }

    if (container) {
    	new Request.HTML({'url': url, update: container}).post('format=html');
    }
    else {
    	new Request.HTML({'url': url}).post('format=html');
    }
    
    
  }

};
