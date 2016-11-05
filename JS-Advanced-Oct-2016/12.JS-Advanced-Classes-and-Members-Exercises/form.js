let result = (function() {
    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this._invalidSymbols = regex; //private property used for validating text-box value
            let _that = this;
            this.elements.on("input", function () {
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
    class Form {
        constructor() {
            for (let textbox of arguments) {
                if (!(textbox instanceof Textbox)) {
                    throw new Error;
                }
            }
            this._element = $('<div>');
            this._element.addClass('form');
            this._textboxes = [];

            for (let textbox of arguments) {
                this._element.append(textbox.elements);
                this._textboxes.push(textbox);
            }
        }

        submit() {
            let result = true;
            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    textbox.elements.css('border', '2px solid green');
                }
                else {
                    textbox.elements.css('border', '2px solid red');
                    result = false;
                }
            }
            return result;
        }
        attach(selector) {
            let container = $(selector);
            container.append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());





let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
