FactoryBot.define do
  factory :order_address do
    post_code { '123-4567' }
    prefecture_id       {Faker::Number.between(from: 2, to: 48)} 
    city {"横浜市"}
    block { "1-1" }
    phone_number { '09012123434' }
    
  end
end
