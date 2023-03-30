//Tom Select
new TomSelect("#select-tags",{
  plugins: ['remove_button'],
  create: true,
  onItemAdd:function(){
    this.setTextboxValue('');
    this.refreshOptions();
  },
  render:{
    option:function(data,escape){
      return '<div class="d-flex"><span>' + escape(data.value) + '</span><span class="ms-auto text-muted">' + escape(data.date) + '</span></div>';
    },
    item:function(data,escape){
      return '<div>' + escape(data.value) + '</div>';
    }
  }
});

//Custom Select
document.addEventListener('alpine:init', () => {
    Alpine.data('selectMultiple', (elSelectId) => ({

        elSelect: document.getElementById(elSelectId),
        isOpen: false,
        term: '',

        selected: [],
        dropdown: [],

        // in the <select> element, set the attributes :
        //  "multiple" to avoid to Always set "selected" to the first item
        //  class="hidden" (better than hide it with javascript which has a slow reaction)
        init()
        {
            for(var index=0; index < this.elSelect.options.length; index++)
            {
                if (this.elSelect.options[index].selected)
                    this.selected.push(this.elSelect.options[index]);
                else
                    this.dropdown.push(this.elSelect.options[index]);
            }
        },

        toggle(option)
        {
            var property1 = (option.selected == true) ? 'dropdown' : 'selected';
            var property2 = (option.selected == true) ? 'selected' : 'dropdown';

            option.selected = !option.selected;

            // add
            this[property1].push(option);

            // remove
            this[property2] = this[property2].filter((opt, index)=>{
                return opt.value != option.value;
            });
            
            // reorder this.dropdown to their original select.options indexes
            if (property1 == 'dropdown')
                this.dropdown.sort((opt1, opt2) => (opt1.index > opt2.index) ? 1 : -1)

            // after adding, re-focus the input
            if (option.selected)
                this.$refs.input.focus();
        },
    }))
})

