class User < ActiveRecord::Base
	validates :email, :username, presence: true
  validates :email, uniqueness: true
  has_secure_password
end
