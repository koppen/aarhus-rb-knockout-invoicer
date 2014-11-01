class CreateInvoiceLines < ActiveRecord::Migration
  def change
    create_table :invoice_lines do |t|
      t.string :description
      t.integer :amount
      t.decimal :price
      t.decimal :tax_rate
      t.belongs_to :invoice, index: true

      t.timestamps
    end
  end
end
