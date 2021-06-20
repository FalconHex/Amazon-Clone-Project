const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    console.log(items);
    console.log(email);

   const transformedItems = items.map((item) => ({
        price_data: {
           currency: "inr",
           product_data: {
                name: item.title,
                images: [item.image],
            },
            unit_amount: item.price * 100 *73,        
        },
        description: item.description,
        quantity: 1,
   }));


   const session = await stripe.checkout.sessions.create({
       payment_method_types: ["card"],
       shipping_rates: ["################"],
       shipping_address_collection: {
           allowed_countries: ["GB", "IN", "US"],
       },
       line_items: transformedItems,
       mode: "payment",
       success_url: `${process.env.HOST}/success`,
       cancel_url: `${process.env.HOST}/checkout`,
       metadata: {
           email,
           images: JSON.stringify(items.map(item => item.image)),
       },
   });
   

   console.log("session created!", session.id);
   res.status(200).json({id: session.id});
};