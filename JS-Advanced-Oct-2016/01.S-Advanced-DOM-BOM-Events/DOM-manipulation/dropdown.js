function addItem() {
  let select = $('#menu')
  let option = $('<option>')
  let newItemText = $('#newItemText')
  let newItemValue = $('#newItemValue')
  option.append(newItemText.val())
  option.attr('value', newItemValue.val())
  select.append(option)
  newItemText.val('')
  newItemValue.val('')
}
