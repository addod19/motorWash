class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :cname
      t.string :email
      t.string :password_digest
      t.string :address1
      t.string :address2
      t.integer :mobile
      t.integer :location
      t.boolean :admin

      t.timestamps
    end
  end
end
