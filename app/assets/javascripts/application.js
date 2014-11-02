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
//= require knockout
//= require_tree .

InvoiceLine = function() {
  this.amount = ko.observable();
  this.price = ko.observable();

  var self = this;

  this.subtotal = ko.computed(function() {
    if (self.amount() && self.price()) {
      return self.amount() * self.price();
    };
  });
};

Invoice = function() {
  this.lines = ko.observableArray();

  var self = this;

  this.addEmptyLine = function() {
    self.lines.push(new InvoiceLine);
  };

  this.anyLines = ko.computed(function() {
    return self.lines().length > 0
  });

  this.isCreatable = ko.computed(function() {
    return self.anyLines() && self.total() > 0
  });

  this.removeLine = function(line) {
    self.lines.remove(line);
  };

  this.total = ko.computed(function() {
    var total = 0;
    self.lines().forEach(function(line) {
      if (line.subtotal()) {
        total = total + line.subtotal();
      }
    });
    return total;
  });
};
