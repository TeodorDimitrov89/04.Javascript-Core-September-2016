class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._invalidSymbols = regex; //private property used for validating text-box value
        let _that = this;
        this.elements.on("input",function () {
            _that.value = $(this).val();
        })
    }

    isValid() {
        return !this._invalidSymbols.test(this.value)
    }

    get elements() {
        return this._elements; //private property _elements containing the set of elements matching the selector
    }

    get value() {
        return this._value;//public property value -getter and setter
    }

    set value(text) {
        this.elements.val(text);
        return this._value = text;
    }
}
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
textbox.value="Pesho";
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
//когато искам моментална смяна на текста в текстово поле се ползва on('input',function())