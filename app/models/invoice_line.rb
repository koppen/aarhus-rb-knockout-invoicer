class InvoiceLine < ActiveRecord::Base
  belongs_to :invoice

  def subtotal
    return nil unless amount && price
    amount * price
  end
end
