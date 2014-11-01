// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $('.invoice-line-amount, .invoice-line-price').on('keyup', function(event) {
    var row = $($(event.target).parents('.invoice-line'));
    var amount = row.find('.invoice-line-amount').val();
    var price = row.find('.invoice-line-price').val();
    if (amount && price) {
      var subtotal = amount * price;
      row.find('.invoice-line-subtotal').html(subtotal);
    };
  });
});
