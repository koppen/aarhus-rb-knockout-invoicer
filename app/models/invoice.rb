class Invoice < ActiveRecord::Base
  has_many :lines, :class_name => InvoiceLine

  accepts_nested_attributes_for :lines

  def total
    lines.collect(&:subtotal).compact.sum
  end
end
