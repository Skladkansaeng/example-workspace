const onDeleteClick = (e) => {
   const child = e.target.parentElement
   if (child) document.getElementById('result').removeChild(child)
}

const onSubmitClick = () => {
   const eleInput = document.getElementById('input')
   const inputValue = eleInput.value
   eleInput.value = ''
   if (inputValue) {
      const node = document.createElement("li");
      const textnode = document.createElement('span')
      const buttonNode = document.createElement('button')
      textnode.textContent = inputValue
      buttonNode.textContent = 'Delete'
      buttonNode.onclick = onDeleteClick

      node.appendChild(textnode);
      node.appendChild(buttonNode);

      document.getElementById('result').appendChild(node)
   }
}