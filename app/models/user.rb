class User < ApplicationRecord
    has_secure_password

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

    validates :cname, presence: true
    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: true
    validates :password_digest, presence: true
    validates :address1, presence: true
    validates :address2, presence: true
    validates :mobile, presence: true
    validates :location, presence: true
end
