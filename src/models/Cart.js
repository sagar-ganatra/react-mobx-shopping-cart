import { action, observable, computed } from 'mobx';
// import uniqueid from 'uniqueid';

class Cart {
    @observable itemsInBag = [];
    @observable itemsInWishlist = [];
    

    @computed get bagCount() {
        return this.itemsInBag.reduce((prevItemCount, currentItem) => {
            return prevItemCount + currentItem.count;
        }, 0);
    }

    @computed get wishlistCount() {
        return this.itemsInWishlist.reduce((prevItemCount, currentItem) => {
            return prevItemCount + currentItem.count;
        }, 0);
    }

    addItem(itemContainer, book) {
        const isItemPresent = itemContainer.findIndex(item => {
            return item.book.id === book.id;   
        });
        if (~isItemPresent) {
            itemContainer[isItemPresent]['count']++; 
        } else {
            itemContainer.push({book, count: 1});
        }
    }

    @action addToBag(book) {
        this.addItem(this.itemsInBag, book);      
    }

    @action addToWishlist(book) {
        this.addItem(this.itemsInWishlist, book);
    }
}

export default Cart;