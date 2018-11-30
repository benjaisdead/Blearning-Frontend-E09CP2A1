$(document).ready(function(){

  var url     = 'https://mindicador.cl/api/'
    var indicadores = {
    utm: 'utm',
    dol: 'dolar',
    eur: 'euro',
    uf: 'uf'
  }


  $('#select').on('change', function(){
    $.ajax({
      url: url + indicadores[$(this).val()],
      method:'GET'
    }).done(function(data){
      console.log(data)
      $('#name').text(data.nombre)
      $('#valor').text('$ ' + parseInt(data.serie['0'].valor))
    });
  });
});
