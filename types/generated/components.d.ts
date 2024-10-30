import type { Schema, Struct } from '@strapi/strapi';

export interface ProductVariantsVariantOne extends Struct.ComponentSchema {
  collectionName: 'components_product_variants_variant_ones';
  info: {
    displayName: 'VariantOne';
  };
  attributes: {
    price: Schema.Attribute.Integer;
    quantity: Schema.Attribute.Integer;
    VaraintOne: Schema.Attribute.String;
  };
}

export interface ProductVariantsVariantTwo extends Struct.ComponentSchema {
  collectionName: 'components_product_variants_variant_twos';
  info: {
    displayName: 'VariantTwo';
  };
  attributes: {
    price: Schema.Attribute.Integer;
    quantity: Schema.Attribute.Integer;
    VariantTwo: Schema.Attribute.String;
  };
}

export interface WilayaBaladia extends Struct.ComponentSchema {
  collectionName: 'components_wilaya_baladias';
  info: {
    displayName: 'Baladia';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface WilayaDaira extends Struct.ComponentSchema {
  collectionName: 'components_wilaya_dairas';
  info: {
    displayName: 'Daira';
  };
  attributes: {
    baladia: Schema.Attribute.Component<'wilaya.baladia', true>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product-variants.variant-one': ProductVariantsVariantOne;
      'product-variants.variant-two': ProductVariantsVariantTwo;
      'wilaya.baladia': WilayaBaladia;
      'wilaya.daira': WilayaDaira;
    }
  }
}
