class Invoice < ActiveRecord::Base
  has_many :invoice_lines

  accepts_nested_attributes_for :invoice_lines
end
