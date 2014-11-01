class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.datetime :due_date
      t.decimal :total
      t.string :recipient

      t.timestamps
    end
  end
end
