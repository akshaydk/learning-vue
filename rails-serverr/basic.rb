require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end
get "/products" do
  cross_origin
  '[{
		"id": 1,
		"name": "MacBook Pro (15 inch)",
		"description": "This laptop has a super crisp Retina display. Yes, we know that overpriced...",
		"price": 2999,
		"inStock": 50,
		"reviews": [{
			"id": "ba560d6b-43eb-4ee6-8aee-a792306f3b27",
			"text": "Almost fainted when I saw the price!",
			"rating": 2.5,
			"reviewer": "Jack Anderson"
		}]
	},
	{
		"id": 2,
		"name": "MacBook Pro (15 inch)",
		"description": "This laptop has a super crisp Retina display. Yes, we know that overpriced...",
		"price": 2999,
		"inStock": 50,
		"reviews": [{
			"id": "ba560d6b-43eb-4ee6-8aee-a792306f3b27",
			"text": "Almost fainted when I saw the price!",
			"rating": 2.5,
			"reviewer": "Jack Anderson"
		}]
	},
	{
		"id": 3,
		"name": "MacBook Pro (15 inch)",
		"description": "This laptop has a super crisp Retina display. Yes, we know that overpriced...",
		"price": 2999,
		"inStock": 50,
		"reviews": [{
			"id": "ba560d6b-43eb-4ee6-8aee-a792306f3b27",
			"text": "Almost fainted when I saw the price!",
			"rating": 2.5,
			"reviewer": "Jack Anderson"
		}]
	}
]'
end

get "/products/1" do
  cross_origin
  '{
		"id": 1,
		"name": "MacBook Pro (15 inch)",
		"description": "This laptop has a super crisp Retina display. Yes, we know that overpriced...",
		"price": 2999,
		"inStock": 50,
		"reviews": [{
			"id": "ba560d6b-43eb-4ee6-8aee-a792306f3b27",
			"text": "Almost fainted when I saw the price!",
			"rating": 2.5,
			"reviewer": "Jack Anderson"
		}]
	}'
end