use neural_network::network::Network;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn network_init() -> i32 {
    Network::default();
    1
}
