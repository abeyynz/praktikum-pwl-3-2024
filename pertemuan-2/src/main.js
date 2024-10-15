let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center bg-white shadow-md p-4 rounded-md`;
   task.innerHTML = `
         <p class="text-gray-700">${title}</p>
         <div class="space-x-0 ">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded-md cursor-pointer">
         </div>
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
