import axios from 'axios';

const BASE_URL = 'https://naves-back.onrender.com/api/naves';

class ProductoVentaServices {

    getAllProductos() {
        return axios.get(BASE_URL);
    }

    getProductosById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createProductos(producto) {
        return axios.post(BASE_URL, producto);
    }

    updateProductos(id, producto) {
        return axios.put(`${BASE_URL}/${id}`, producto);
    }

    deleteProducto(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ProductoVentaServices();