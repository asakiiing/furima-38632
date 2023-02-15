class OrdersController < ApplicationController
  before_action :set_item, only: [:index, :create]
  def index
    @order = Order.new(order_params)
  end

  def create
    @order_address = OrderAddress.new(order_params)
    if @order_address.valid?
      @order_address.save
      redirect_to root_path
    else
      render :index
    end
  end


  private
  def set_item
    @item = Item.find(params[:item_id])
  end

  def order_params
    params.permit(:post_code, :prefecture_id, :city, :block, :building, :phone_number).merge(user_id: current_user.id)
  end
end
