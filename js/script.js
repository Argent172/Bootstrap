document.getElementById("addbtn").addEventListener("click", add);
document.getElementById("rembtn").addEventListener("click", rem);

function add(){
	document.getElementById("input-scroll-area").insertAdjacentHTML('beforeend', '<div class="single-data"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">Заголовок и дата</span></div><input type="text" aria-label="Заголовок" class="form-control"><input type="date" aria-label="Дата" class="form-control"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">Текст заметки</span></div><textarea class="form-control" aria-label="With textarea"></textarea></div></div></div>');
}
function rem(){
	array = document.getElementsByClassName("single-data")
	if (array.length != 1){array[array.length-1].remove()};
}