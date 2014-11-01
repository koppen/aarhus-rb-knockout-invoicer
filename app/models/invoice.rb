class Invoice < ActiveRecord::Base
  has_many :invoice_lines

  accepts_nested_attributes_for :invoice_lines

  def total
    invoice_lines.collect(&:subtotal).compact.sum
  end
end
