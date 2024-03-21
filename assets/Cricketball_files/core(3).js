(function() {
var $ = 'id' in document ? document.id : window.$;

emoticons = {

    forms: '',
    emoticons: '',
    current_toggle: '',
    current_content: '',
    upload: true,
    view: true,

    init: function(){

        var forms = $$('div.comments > form');
        if(forms.length > 0){
            this.getEmoticons();
        }
    },

    getEmoticons: function(){

        var bind = this;
        new Request.JSON ({
            //CADENAS MaDi emoticons from activity (SocialEngine emoticons) or part emoticons
            //toggle comment for using part emoticons
            'url': en4.core.baseUrl + 'activity/service/get-emoticons',
            //'url': en4.core.baseUrl + 'advancedcomments/get-emoticons',
            'method': 'post',
            'data': {
                'format': 'json',
            },
            onComplete: function(result) {

                bind.view = result.view;
                bind.upload = result.upload;

                if(!bind.view && !bind.upload){
                    return;
                }

                if(!result.emoticons.length && !bind.upload){
                    return;
                }

                if(result.emoticons.length > 0){
                    bind.emoticons = result.emoticons;
                    bind.createEmoticons();
                }

                bind.createWrapper();
            }
        }).send();
    },

    createWrapper: function(){

        var bind = this;

        $$('div.comments').each(function(item){
            if(item.getElement('form')){
                if(item.getElement('form').getElement("input[name='identity']")){
                    item.addEvent('click', function(){
                        if(!item.getElement('form').hasClass('form_generated')){
                            bind.createForm(item.getElement('form'), 1);
                        }
                    });
                }
            }
        });

        if($('activity-feed')){
            $('activity-feed').addEvent('click', function(){
                $('activity-feed').getElements('form.activity-comment-form').each(function(item){
                    if(!item.hasClass('form_generated')){
                        bind.createForm(item, 0);
                    }
                });
            });
        }
    },

    createForm: function(form, type){

        var bind = this;
        if(form.style.display == ''){
            form.addClass('form_generated');

            var field = form.getElement('textarea');
            var params = field.getComputedSize();
            params['border-top-width'] = params['border-top-width'] || 1;
            form.getElement('.comment-compose-container').hide();

            var wrapper = new Element('div', {'class': 'advcomments_wrapper'}).inject(form, 'top');
            wrapper.setStyle('width', '100%');
            wrapper.setStyle('padding-bottom', '6px');

            if(bind.view || bind.upload){
                bind.createButton(form, type);
            }

            bind.createContent(wrapper, field, params);
            bind.createToggles(wrapper, params);


        }
    },

    createContent: function(wrapper, field, params){

        var bind = this;

        var content = new Element('div', {
            'class': 'adv-content',
            'contenteditable': true,
            'id': 'body'
        }).inject(wrapper, 'bottom');

        content.setStyles({
            'padding-top': field.getStyle('padding-top'),
            'padding-left': field.getStyle('padding-left'),
            'border-width': params['border-top-width'],
            'border-radius': field.getStyle('border-radius'),
            'font-size': field.getStyle('font-size'),
            'min-height': '70px'
        });

        var padding = params['totalHeight'] - content.getSize().y;
        content.setStyle('padding-bottom', padding);

        content.addEvent('keyup', function(){
            field.value = content.innerHTML;
        });
        // add <br><br> for newlines and to avoid automatically added <div>
        content.addEvent('keydown', function(ev){
            // trap the return key being pressed
            if (ev.key === "enter" && document.queryCommandSupported('insertHTML')) {
                ev.preventDefault();
                // insert 2 br tags (if only one br tag is inserted the cursor won't go to the second line)
                document.execCommand('insertHTML', false, '<br><br>');
            }
        });
        content.addEventListener('paste', function (ev) {
            if (ev.clipboardData || window.clipboardData || (ev.originalEvent && ev.originalEvent.clipboardData)) {
                if (document.queryCommandSupported('insertHTML')) {
                    ev.preventDefault();
                    var clipboardData = ev.clipboardData || window.clipboardData || ev.originalEvent.clipboardData;
                    clipboardData = clipboardData.getData('text/plain');
                    clipboardData = clipboardData.replace(/(?:\r\n|\r|\n)/g, '<br>');
                    document.execCommand('insertHTML', false, clipboardData);
                }
            }
        }, false);

        content.focus();

        this.content = content;
    },

    createToggles: function(wrapper, params){

        var bind = this;
        var items = new Element('div', {'class': 'options_box'}).inject(wrapper, 'bottom');
        //items.setStyle('height', params['totalHeight']);

        /* Emoticons */
        if(bind.view && bind.emoticons.length > 0){
            var emoticons_toggle = new Element('a', {
                'href': 'javascript:void(0)',
                'class': 'emoticon-toggle'
            }).inject(items, 'bottom');

            emoticons_toggle.addEvent('click', function(){

                var position = emoticons_toggle.getPosition();
                $('comm_emoticons_wrapper').setPosition({
                    'x': position.x - 43,
                    'y': position.y - $('comm_emoticons_wrapper').getSize().y - 5
                });

                if(bind.current_toggle == emoticons_toggle){
                    $('comm_emoticons_wrapper').toggleClass('active');
                    emoticons_toggle.toggleClass('active');
                } else {
                    $('comm_emoticons_wrapper').addClass('active');
                    $$('a.emoticon-toggle').removeClass('active');
                    emoticons_toggle.addClass('active');
                }

                bind.current_toggle = emoticons_toggle;
                bind.current_content = wrapper.getElement('div.adv-content');
            });
        }
    },


     previewPictureShow: function(images_toggle, previewImage) {
        if (images_toggle.files && images_toggle.files[0]) {
            var reader = new FileReader();
            previewImage.width = 150;
            previewImage.heigt = 150;
            reader.onload = function (e) {
                previewImage.setProperty('src', e.target.result);
            };
            reader.readAsDataURL(images_toggle.files[0]);
        }
    },


    createButton: function(form, type){
        var that = this;

        var button = form.getElement('button');
        var new_button = new Element('div', {
                'class': 'submit_button',
                'text': button.innerHTML
            }).inject(form, 'bottom');

        var styles = button.getStyles('padding', 'border-radius', 'font-weight');
        new_button.setStyles(styles);
        new_button.setStyle('background-color', '#9ab6ca');

        var images_toggle = new Element('input', {
            'type': 'file',
            'class': 'load-images',
            'name': 'photo',
            'accept': 'image/*',
            'style': 'display: none'
        }).inject(new_button, 'after');

        var previewImage = new Element('img', {
            'class': 'compose-preview-image'
        });

        var deleteButton = new Element('div', {
            'text': 'Delete',
            'class': 'button-file'
        });

        images_toggle.addEvent('change', function () {
            dummy_button.hide();
            previewImage.inject(form, 'after');
            that.previewPictureShow(images_toggle, previewImage);

            deleteButton.inject(images_toggle, 'before');
            deleteButton.setStyles(styles);
            deleteButton.setStyle('background-color', '#9ab6ca');

            deleteButton.addEvent('click', function () {
                previewImage.remove();
                deleteButton.remove();
                images_toggle.value = '';
                dummy_button.show();
            });
        });

        var dummy_button = new Element('div', {
            'text': 'Add Photo',
            'class': 'button-file'
        }).inject(images_toggle, 'before');
        dummy_button.setStyles(styles);
        dummy_button.setStyle('background-color', '#bcd4e4');

        dummy_button.addEvent('click', function(){
            images_toggle.click();
        });

        var cancelButton = new Element('div', {
            'text': 'Cancel',
            'class': 'cancel_button'
        }).inject(images_toggle, 'after');
        cancelButton.setStyles(styles);
        cancelButton.setStyle('background-color', '#9ab6ca');
        cancelButton.setStyle('right', '1px');

        cancelButton.addEvent('click', function () {
            //noinspection InnerHTMLJS
            this.parentElement.querySelectorAll('.adv-content')[0].innerHTML = '';
            this.parentElement.getElementsByTagName('textarea')[0].value = '';
            deleteButton.click();
            this.parentElement.style.display = 'none';
        });

        var hidden = new Element('div').inject(form, 'bottom').hide();
        button.inject(hidden);

        if(type == 1){
            new_button.addEvent('click', function(){
                new File.Upload({
                    'url' : en4.core.baseUrl + 'advancedcomments/upload-image',
                    data: {
                        format: 'json'
                    },
                    images: [images_toggle],
                    onComplete: function(response){
                        var response_decoded = JSON.decode(response);
                        if (typeof response_decoded.path === "undefined") {
                            return;
                        }
                        var form_values  = form.toQueryString();
                        form_values += '&format=json';
                        form_values += '&id=' + form.identity.value;
                        form_values += '&path=' + response_decoded.path;
                        if(form['body'].value === '' && response_decoded.path === '') {
                            return;
                        }
                        en4.core.request.send(new Request.JSON({
                            url : en4.core.baseUrl + 'advancedcomments/comment/create',
                            format : 'json',
                            data : form_values
                        }), {
                            'element' : $('comments')
                        });
                    }
                }).send();
            });
        } else {
            new_button.addEvent('click', function(){
                new File.Upload({
                    'url' : en4.core.baseUrl + 'advancedcomments/upload-image',
                    data: {
                        format: 'json'
                    },
                    images: [images_toggle],
                    onComplete: function(response){
                        var response_decoded = JSON.decode(response);
                        if (typeof response_decoded.path === "undefined") {
                            return;
                        }
                        var form_values  = form.toQueryString();
                        form_values += '&format=json';
                        form_values += '&action_id=' + form.action_id.value;
                        form_values += '&path=' + response_decoded.path;
                        if(form['body'].value === '' && response_decoded.path === '') {
                            return;
                        }
                        en4.core.request.send(new Request.JSON({
                            url : en4.core.baseUrl + 'advancedcomments/comment/create-activity',
                            format : 'json',
                            data : form_values,
                            subject : en4.core.subject.guid
                        }), {
                            'element' : $('comment-likes-activity-item-'+form.action_id.value),
                            'updateHtmlMode': 'comments2'
                        });
                    }
                }).send();
            });
        }
    },

    createEmoticons: function(){

        var bind = this;

        var wrapper = new Element('div', {
            'class': 'comm_emoticons_wrapper',
            'id': 'comm_emoticons_wrapper'
        }).inject(document.body, 'bottom');

        $(document.body).addEvent('click',function(e) {
            if(!($(e.target) == wrapper || $(e.target).getParents().contains(wrapper) || e.target.hasClass('emoticon-toggle'))) {
                $('comm_emoticons_wrapper').removeClass('active');
                $$('a.emoticon-toggle').removeClass('active');
            }
        });

        var top = new Element('div', {'class': 'top_smcontent'}); //.inject(wrapper, 'top'); CADENAS mod: remove topbar
        var bottom = new Element('div', {'class': 'bottom_smcontent'}).inject(wrapper, 'bottom');
        new Element('div', {'class': 'space5'}).inject(wrapper, 'bottom');

        new ScrollableComments(bottom);
        new ScrollableComments(top, {'mode': 'horizontal'});

        this.emoticons.each(function(item, key){

            var category = new Element('div', {'class': 'category_item', 'title': item['category']}).inject(top);

            if(item['photo']){
                category.innerHTML = '<img src="'+ item['photo'] + '">';
            } else {
                category.innerHTML = '<span>' + item['category'] + '</span>';
            }

            var cat_emoticons = new Element('div', {'class': 'cat_emoticons'}).inject(bottom);

            if(key == 0){
                category.addClass('active');
                cat_emoticons.show();
            }

            category.addEvent('click', function(){
                top.getElements('div').removeClass('active');
                bottom.getElements('.cat_emoticons').hide();
                category.addClass('active');
                cat_emoticons.show();
            });

            if(item['emoticons']){
                item['emoticons'].each(function(emoticon){

                    var box = new Element('div').inject(cat_emoticons);
                    var img = new Element('img', {
                        'src': emoticon['photo'],
                        'title': emoticon['title']
                    }).inject(box);

                    box.addEvent('click', function(){
                        img.clone().inject(bind.current_content, 'bottom');

                        var text = bind.current_content.getParent('form').getElement('textarea');
                        text.value = bind.current_content.innerHTML;

                        var position = bind.current_toggle.getPosition();
                        $('comm_emoticons_wrapper').setPosition({
                            'x': position.x - 43,
                            'y': position.y - $('comm_emoticons_wrapper').getSize().y - 5
                        });
                    });
                });
            }
        });
    },
};

})();

en4.core.runonce.add(function() {
    emoticons.init();
});




var ScrollableComments = new Class({

    Implements: [Options, Events],

	options: {
		autoHide: 1,
		fade: 1,
		className: 'adv_comm_scrollbar',
		proportional: true,
		proportionalMinHeight: 15,
        proportionalMinWidth: 15,
        mode: 'vertical'
	},

    initialize: function(element, options) {

        this.setOptions(options);

        if (typeOf(element) == 'elements') {
            var collection = [];
			element.each(function(element) {
				collection.push(new Scrollable(element, options));
			});
			return collection;
        } else {
  		    var scrollable = this;
			this.element = document.id(element);
			if (!this.element) return 0;

			this.active = false;

            this.container = new Element('div', {
				'class': this.options.className,
				html: '<div class="knob"></div>'
			}).inject(element, 'bottom');

            this.slider = new Slider(this.container, this.container.getElement('div'), {
				mode: this.options.mode,
				onChange: function(step) {
				    if(this.options.mode == 'vertical'){
				        this.element.scrollTop = ((this.element.scrollHeight - this.element.offsetHeight) * (step / 100));
				    }
                    if(this.options.mode == 'horizontal'){
				        this.element.scrollLeft = ((this.element.scrollWidth - this.element.offsetWidth) * (step / 100));
				    }
				}.bind(this)
			});

            this.knob = this.container.getElement('div');
			this.reposition();
			if (!this.options.autoHide) this.container.fade('show');

            this.element.addEvents({
				mouseenter: function() {
				    if(scrollable.options.mode == 'vertical'){
				        if (this.scrollHeight > this.offsetHeight) {
    						scrollable.showContainer();
    					}
				    }
                    if(scrollable.options.mode == 'horizontal'){
                        if (this.scrollWidth > this.offsetWidth) {
                            scrollable.showContainer();
                        }
                    }
					scrollable.reposition();
				},
				mouseleave: function(e) {
				    scrollable.hideContainer();
				},
				mousewheel: function(event) {
					event.preventDefault();

                    if(scrollable.options.mode == 'vertical'){
                        if ((event.wheel < 0 && this.scrollTop < (this.scrollHeight - this.offsetHeight)) || (event.wheel > 0 && this.scrollTop > 0)) {
    						this.scrollTop = this.scrollTop - (event.wheel * 30);
    						scrollable.reposition();
    					}
                    }

                    if(scrollable.options.mode == 'horizontal'){
                       if ((event.wheel < 0 && this.scrollLeft < (this.scrollWidth - this.offsetWidth)) || (event.wheel > 0 && this.scrollLeft > 0)) {
    						this.scrollLeft = this.scrollLeft - (event.wheel * 30);
    						scrollable.reposition();
    					}
                    }
				},
				'Scrollable:contentHeightChange': function() {
						//this scrollable:contentHeightChange could be fired on the current element in order
						//to get a custom action invoked (implemented in onContentHeightChange option)
					scrollable.fireEvent('contentHeightChange');
				}
			});

            this.knob.addEvent('mousedown', function(e) {
				scrollable.active = true;
				window.addEvent('mouseup', function(e) {
					scrollable.active = false;
					this.removeEvents('mouseup');
				});
			});

			window.addEvents({
				'resize': function() {
					scrollable.reposition.delay(50,scrollable);
				},
				'mousewheel': function() {
					if (scrollable.element.isVisible()) scrollable.reposition();
				}
			});

			// Initial hiding of the scrollbar
			if (this.options.autoHide) scrollable.container.fade('hide');

			return this;
		}
    },

    reposition: function() {
		(function() {
			this.size = this.element.getComputedSize();
			this.position = this.element.getPosition();
			var containerSize = this.container.getSize();

            if(this.options.mode == 'vertical'){
                this.container.setStyles({
                    'top': 0,
                    'height': this.size.height - 5,
                    'right': 5
                });
            }
            if(this.options.mode == 'horizontal'){
                this.container.setStyles({
                    'left': 0,
                    'top': 33,
                    'width': this.size.width
                });
            }

			this.slider.autosize();

		}).bind(this).delay(50);

        if(this.options.mode == 'vertical'){
            if (this.options.proportional === true) {
    			if (isNaN(this.options.proportionalMinHeight) || this.options.proportionalMinHeight <= 0) {
    				throw new Error('Scrollable: option "proportionalMinHeight" is not a positive number.');
    			} else {
    				var minHeight = Math.abs(this.options.proportionalMinHeight);
    				var knobHeight = this.element.offsetHeight * (this.element.offsetHeight / this.element.scrollHeight);
    				this.knob.setStyle('height', Math.max(knobHeight, minHeight));
    			}
    		}

    		this.slider.set(Math.round((this.element.scrollTop / (this.element.scrollHeight - this.element.offsetHeight)) * 100));
        }

        if(this.options.mode == 'horizontal'){
            if (this.options.proportional === true) {
    			if (isNaN(this.options.proportionalMinWidth) || this.options.proportionalMinWidth <= 0) {
    				throw new Error('Scrollable: option "proportionalMinWidth" is not a positive number.');
    			} else {
    				var minWidth = Math.abs(this.options.proportionalMinWidth);
    				var knobWidth = this.element.offsetWidth * (this.element.offsetWidth / this.element.scrollWidth);
                    this.knob.setStyle('width', Math.max(knobWidth, minWidth));
    			}
    		}

    		this.slider.set(Math.round((this.element.scrollLeft / (this.element.scrollWidth - this.element.offsetWidth)) * 100));
        }
	},

	scrollBottom: function() {
		this.element.scrollTop = this.element.scrollHeight;
		this.reposition();
	},

	scrollTop: function() {
		this.element.scrollTop = 0;
		this.reposition();
	},

	isInside: function(e) {
		if (e.client.x > this.position.x && e.client.x < (this.position.x + this.size.totalWidth) && e.client.y > this.position.y && e.client.y < (this.position.y + this.size.totalHeight))
			return true;
		else return false;
	},

	showContainer: function(force) {
		if ((this.options.autoHide && this.options.fade && !this.active) || (force && this.options.fade)) this.container.fade('in');
		else if ((this.options.autoHide && !this.options.fade && !this.active) || (force && !this.options.fade)) this.container.fade('show');
	},

	hideContainer: function(force) {
		if ((this.options.autoHide && this.options.fade && !this.active) || (force && this.options.fade)) this.container.fade('out');
		else if ((this.options.autoHide && !this.options.fade && !this.active) || (force && !this.options.fade)) this.container.fade('hide');
	},

	terminate: function() {
		this.container.destroy();
	}
});




File.Upload = new Class({

	Implements: [Options, Events],

	options: {
		onComplete: function(){}
	},

	initialize: function(options){
		var self = this;
		this.setOptions(options);
		this.uploadReq = new Request.File({
			onComplete: function(){
				self.fireEvent('complete', arguments);
				this.reset();
			}
		});
		if(this.options.data) this.data(this.options.data);
		if(this.options.images) this.addMultiple(this.options.images);
	},

	data: function(data){
		var self = this;
		if(this.options.url.indexOf('?') < 0) this.options.url += '?';
		Object.each(data, function(value, key){
			if(self.options.url.charAt(self.options.url.length - 1) != '?') self.options.url += '&';
			self.options.url += encodeURIComponent(key) + '=' + encodeURIComponent(value);
		});
	},

	addMultiple: function(inputs){
		var self = this;
		inputs.each(function(input){
			self.add(input);
		});
	},

	add: function(input){
 		name = input.get('name'),
	    file = input.files[0];
		this.uploadReq.append(name, file);
	},

	send: function(input){
		if(input) this.add(input);
		this.uploadReq.send({
			url: this.options.url
		});
	}

});

Request.File = new Class({

	Extends: Request,

	options: {
		emulation: false,
		urlEncoded: false
	},

	initialize: function(options){
		this.xhr = new Browser.Request();
		this.formData = new FormData();
		this.setOptions(options);
		this.headers = this.options.headers;
	},

	append: function(key, value){
		this.formData.append(key, value);
		return this.formData;
	},

	reset: function(){
		this.formData = new FormData();
	},

	send: function(options){
		var url = options.url || this.options.url;

		this.options.isSuccess = this.options.isSuccess || this.isSuccess;
		this.running = true;

		var xhr = this.xhr;
		xhr.open('POST', url, true);
		xhr.onreadystatechange = this.onStateChange.bind(this);

		Object.each(this.headers, function(value, key){
			try{
				xhr.setRequestHeader(key, value);
			}catch(e){
				this.fireEvent('exception', [key, value]);
			}
		}, this);

		this.fireEvent('request');
		xhr.send(this.formData);

		if(!this.options.async) this.onStateChange();
		if(this.options.timeout) this.timer = this.timeout.delay(this.options.timeout, this);
		return this;
	}

});
