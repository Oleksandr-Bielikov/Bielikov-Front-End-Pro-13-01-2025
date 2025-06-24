import { createSlice } from '@reduxjs/toolkit';
import lenovoImage from '../../images/lenovo-Y50-70.jpg';
import nikeImage from '../../images/Nike-M-Nk-Df-Acd21.jpg';
import cersanitImage from '../../images/CERSANIT-MITO-17.jpg';

const initialState = {
  items: [
    {
      id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: 25000, image: lenovoImage,
      description: [
        {
          title: '15.6-дюймовий дисплей стандарту Full HD',
          text: 'Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).'
        },
        {
          title: 'Динаміки преміум-класу',
          text: 'Стереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.'
        },
        {
          title: 'Dolby Advanced Audio',
          text: 'Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків.'
        }
      ]},
    {
      id: 1, category: 'Clothes', name: 'Nike M Nk Df Acd21', quantity: 22, price: 4000, image: nikeImage,
      description: [
        {
          title: 'Чоловічі спортивні штани від Nike відшиті з бавовни з додаванням поліестеру.',
          text: "Модель з м'якої тканини відмінно підійде для повсякденного носіння та активного відпочинку."
        },
        {
          title: "Особливості:",
          text: "Звужений крій. Штани з манжетами. Модель утеплена флісом. Еластичний пояс на гумці. Фірмовий логотип та напис Nike. З боків і ззаду є врізні кишені."
        },
        {
          title: "Рекомендації щодо догляду:",
          text: "Прати вручну або в пральній машині в делікатному режимі при температурі 30℃. Використовувати рідкі пральні засоби, гель або м'який порошок для прання. Сушити природним способом далеко від обігрівальних приладів. Прасувати без пари при мінімальній і температурі та тиску праски на тканину."
        }
      ]},
    {
      id: 2, category: 'Plumbing', name: 'CERSANIT MITO 17', quantity: 1337, price: 5000, image: cersanitImage,
      description: [
        {
          title: "Унітази від польської компанії Cersanit – це продукція найвищої якості з відмінними функціональними властивостями.",
          text: "Кераміка ідеально біла і гладка за рахунок використання у виробництві передових технологій, а також, завдяки пильному контролю над процесом виготовлення. Унітаз від Cersanit прослужить довго і протягом багатьох років не втратить гарний зовнішній вигляд. Простота форм і гладкість поверхонь полегшують процес прибирання. Підлоговий унітаз Mito 17 від Cersanit з горизонтальним зливом має габаритні розміри 75 х 35.5 х 67 см. Модель комплектується поліпропіленовим сидінням з металевим кріпленням та бачком з функцією подвійного зливу."
        }
      ]},
  ],
  sortField: '',
  sortAsc: true,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortByField(state, action) {
      const field = action.payload;

      if (state.sortField === field) {
        state.sortAsc = !state.sortAsc;
      } else {
        state.sortField = field;
        state.sortAsc = true;
      }
          
      state.items.sort((a, b) => {
        if (a[field] < b[field]) {
          return state.sortAsc ? -1 : 1;
        }
        if (a[field] > b[field]) {
          return state.sortAsc ? 1 : -1;
        }
        return 0;
      });
    },
    deleteProduct(state, action) {
      const idToDelete = action.payload;
      state.items = state.items.filter(product => product.id !== idToDelete)
    },
    editProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.items.findIndex(item => item.id === updatedProduct.id);
      if (index !== -1) {
        state.items[index] = updatedProduct;
      }
    },
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
  },
});

export const { sortByField, deleteProduct, editProduct, addProduct } = productsSlice.actions;
export default productsSlice.reducer;