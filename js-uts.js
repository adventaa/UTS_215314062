function kirim() {
    var jumlah = document.getElementById("jumlah").value;
    var tombol;
    var pilihan = "";
    var namaDepan= document.getElementById("nama depan").value;
    var namaBelakang = document.getElementById("nama belakang").value;
    var namaEmail = document.getElementById("nama email").value;

    // error trapping di inputan nama depan
    if (namaDepan.trim() === "") {
      alert("Masukkan nama depan anda!");
      return;
    }

    // error trapping di inputan nama belakang
    if (namaBelakang.trim() === "") {
      alert("Masukkan nama belakang anda!");
      return;
    }

    // error trapping di inputan nama email
    if (namaEmail.trim() === "") {
      alert("Masukkan alamat email anda!");
      return;
    }

    // error trapping di inputan jumlah pilihan
    if (isNaN(jumlah) || jumlah < 1) {
      alert("Jumlah pilihan tidak boleh 0 dan bilangan negative");
      return;
    }

    for (var i = 1; i <= jumlah; i++) {
      pilihan += 
        "<p> Pilihan " + i + " <input placeholder = 'Masukkan Hobi anda' >" +"</p>";
    }

    tombol = "<p>" + '<button onclick="RadioButton()">OK</button>' + "</p>";
    document.getElementById("pilih").innerHTML = pilihan;
    document.getElementById("tombol").innerHTML = tombol;
}
  
function RadioButton() {
    var form = document.getElementById("pilih");
    var inputs = form.getElementsByTagName("input");
    var submit;
    var radios = "";
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "text") {
        radios +=
          '<input class="form-check-input" type="checkbox" name="option" value="' + inputs[i].value +'">' +inputs[i].value + "<br>";
      }
    }
    

  submit = '\n' +'<button onclick="hasil()">Submit</button>';
  document.getElementById("submit1").innerHTML = submit;
  list.innerHTML = radios;
}
  
function hasil() {
      var testName1 = document.getElementById("nama depan");
      var testName2 = document.getElementById("nama belakang");
      var testName3 = document.getElementById("nama email");
      var form = document.querySelector("form");
      var result = document.getElementById("result");
      var jumlah = document.getElementById("jumlah").value;
      var form1 = document.getElementById("pilih");
      var inputs = form1.getElementsByTagName("input");
      var radios = "";
  
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text") {
          radios +=
            inputs[i].value + ", ";
        }
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        var checkedBox = document.getElementsByName("option");
        var hobby = "";
        for(var i = 0; i < checkedBox.length; i++){
            if(checkedBox[i].checked){
                hobby = hobby + checkedBox[i].value + ",";
            }
        }
        document.getElementById("result").innerText = "Halo, nama saya " + testName1.value + " " + testName2.value + 
        ", dengan email " + testName3.value + ", saya mempunyai sejumlah " + jumlah + " pilihan hobi yaitu " + 
        radios + " dan saya menyukai " + hobby.replace(/,\s*$/, "");
    });
}