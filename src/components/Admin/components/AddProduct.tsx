import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface AddProductFormValues {
  name: string;
  price: number | "";
  stock: number | "";
  sku: string;
  brand: string;
  discount: number | "";
  category: string;
  colors: string[];
  status: "active" | "inactive";
  description: string;
  image: File | null;
}

const categories = ["Electronics", "Fashion", "Books", "Home", "Other"];

const validationSchema = Yup.object({
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Price is required").positive(),
  stock: Yup.number()
    .required("Stock is required")
    .min(0, "Stock cannot be negative"),
  sku: Yup.string().required("SKU is required"),
  brand: Yup.string().required("Brand is required"),
  discount: Yup.number().min(0).max(90),
  category: Yup.string().required("Category is required"),
  colors: Yup.array().min(1, "At least one color is required"),
  status: Yup.string().required(),
  description: Yup.string().min(10).required(),
  image: Yup.mixed().required("Product image is required"),
});

const AddProduct: React.FC = () => {
  const formik = useFormik<AddProductFormValues>({
    initialValues: {
      name: "",
      price: "",
      stock: "",
      sku: "",
      brand: "",
      discount: "",
      category: "",
      colors: [],
      status: "active",
      description: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Admin Product Data:", values);
    },
  });

  const handleAddColor = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      e.preventDefault();
      formik.setFieldValue("colors", [
        ...formik.values.colors,
        e.currentTarget.value.trim(),
      ]);
      e.currentTarget.value = "";
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h6" mb={2}>
        Add Product (Admin)
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          margin="normal"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          label="Price"
          type="number"
          margin="normal"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />

        <TextField
          fullWidth
          label="Stock Quantity"
          type="number"
          margin="normal"
          name="stock"
          value={formik.values.stock}
          onChange={formik.handleChange}
          error={formik.touched.stock && Boolean(formik.errors.stock)}
          helperText={formik.touched.stock && formik.errors.stock}
        />

        <TextField
          fullWidth
          label="SKU"
          margin="normal"
          name="sku"
          value={formik.values.sku}
          onChange={formik.handleChange}
          error={formik.touched.sku && Boolean(formik.errors.sku)}
          helperText={formik.touched.sku && formik.errors.sku}
        />

        <TextField
          fullWidth
          label="Brand"
          margin="normal"
          name="brand"
          value={formik.values.brand}
          onChange={formik.handleChange}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={formik.touched.brand && formik.errors.brand}
        />

        <TextField
          fullWidth
          label="Discount (%)"
          type="number"
          margin="normal"
          name="discount"
          value={formik.values.discount}
          onChange={formik.handleChange}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}
        />

        <TextField
          select
          fullWidth
          label="Category"
          margin="normal"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          label="Add Colors (Press Enter)"
          margin="normal"
          onKeyDown={handleAddColor}
        />

        <Stack direction="row" spacing={1} mt={1}>
          {formik.values.colors.map((color, index) => (
            <Chip
              key={index}
              label={color}
              onDelete={() =>
                formik.setFieldValue(
                  "colors",
                  formik.values.colors.filter((_, i) => i !== index)
                )
              }
            />
          ))}
        </Stack>

        {formik.touched.colors && formik.errors.colors && (
          <Typography color="error" variant="caption">
            {formik.errors.colors as string}
          </Typography>
        )}

        <TextField
          select
          fullWidth
          label="Status"
          margin="normal"
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Description"
          margin="normal"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
          Upload Product Image
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("image", e.currentTarget.files?.[0])
            }
          />
        </Button>

        {formik.touched.image && formik.errors.image && (
          <Typography color="error" variant="caption">
            {formik.errors.image}
          </Typography>
        )}

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Add Product
        </Button>
      </Box>
    </Paper>
  );
};

export default AddProduct;
