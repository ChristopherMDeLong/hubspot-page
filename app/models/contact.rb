class Contact < ApplicationRecord
  validates_presence_of :name, :email
  attr_reader :name, :email, :company, :product
end
