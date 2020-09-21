class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    @items =Item.all 
    render json: ItemSerializer.new(@items) 
  end

  def show
    render json: @item 
  end

  def create
    @item = items.build(item_params)
    if @item.save
      render json: ItemSerializer.new(@item)
    else
      error_resp = {
        error: @item.errors.full_messages.to_sentence
      }
      render json: error_resp 
    end
  end

  def update
    if @item.update(item_params) 
      render json: ItemSerializer.new(@item)
    else
      error_resp = {
        error: @item.errors.full_messages.to_sentence
      }
      render json: error_resp 
    end
  end

  def destroy
    @item.destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name)
  end

end
