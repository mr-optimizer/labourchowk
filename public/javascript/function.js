let avatar;
function readURL(input) {
    var reader = new FileReader();
    avatar = reader.result;
    reader.readAsDataURL(input.files[0]);
  
}
module.exports = avatar;