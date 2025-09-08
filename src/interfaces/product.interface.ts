import type { Json } from '../supabase/supabase';
import { JSONContent } from '@tiptap/react';

export interface Size {
	name: string;
	size: string;
	price: number;
}

export interface VariantProduct {
	id: string;
	stock: number;
	price: number;
	size: string;
}

export interface Product {
	id: string;
	name: string;
	material: string;
	slug: string;
	features: string[];
	description: Json;
	images: string[];
	created_at: string;
	variants: VariantProduct[];
}

export interface PreparedProducts {
	id: string;
	name: string;
	material: string;
	slug: string;
	features: string[];
	description: Json;
	images: string[];
	created_at: string;
	price: number;
	size: string[];
	sizes: {
		name: string;
		size: string;
	}[];
	variants: VariantProduct[];
}

export interface ProductInput {
	name: string;
	material: string;
	slug: string;
	features: string[];
	description: JSONContent;
	images: File[];
	variants: VariantInput[];
}

export interface VariantInput {
	id?: string;
	stock: number;
	price: number;
	size: string;
}