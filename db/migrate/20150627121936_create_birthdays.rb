class CreateBirthdays < ActiveRecord::Migration
  def change
    create_table :birthdays do |t|
      t.string :name
      t.date   :birthdate
      t.timestamps null: false
    end
  end
end
