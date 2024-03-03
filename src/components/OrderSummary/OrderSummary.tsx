import supabase from "@/src/config/supabaseClient";

export default async function OrderSummary() {
  const { data, error } = await supabase.from("shopping_cart").select();

  if (error) {
    throw error;
  }

  const subtotal = data?.reduce(
    (total, product) => (total += product.price),
    0,
  );
  const tax = (subtotal * 0.09).toFixed(2);

  const totalPrice = (subtotal + subtotal * 0.09 + 9.99).toFixed(2);

  return (
    <main className="flex flex-col px-2 justify-center md:flex-row">
      <form>
        <section className="flex flex-col p-4 border-2 border-gray-400 rounded-md">
          <fieldset>
            <legend className="text-lg font-bold">Delivery</legend>
            <label htmlFor="e-mail address">E-mail Address</label>
            <input
              id="e-mail address"
              className="py-1 border-2 border-gray-400 rounded-md "
            />
            <label htmlFor="full name">Full Name</label>
            <input
              id="full name"
              className="py-1 border-2 border-gray-400 rounded-md "
            />
            <label htmlFor="street address">Street Address</label>
            <input
              id="street address"
              className="py-1 border-2 border-gray-400 rounded-md "
            />
            <label htmlFor="phone number">Phone Number</label>
            <input
              id="phone number"
              className="py-1 border-2 border-gray-400 rounded-md "
            />
          </fieldset>
        </section>
        <section className="flex flex-col p-4 border-2 border-gray-400 rounded-md">
          <fieldset>
            <legend className="text-lg font-bold"> Shipping Method</legend>
            <div className="flex justify-between">
              <span className="flex flex-row-reverse gap-5">
                <label htmlFor="no rush">No Rush (7-9 business days)</label>
                <input
                  id="no rush"
                  type="radio"
                  className="py-1 border-2 border-gray-400 rounded-md "
                />
              </span>
              <p>$5.99</p>
            </div>
            <div className="flex justify-between">
              <span className="flex flex-row-reverse gap-5">
                <label htmlFor="standard">Standard (3-5 business days)</label>
                <input
                  id="standard"
                  type="radio"
                  className="py-1 border-2 border-gray-400 rounded-md "
                />
              </span>
              <p>$9.99</p>
            </div>
            <div className="flex justify-between">
              <span className="flex flex-row-reverse gap-5">
                <label htmlFor="express">Express (1-2 business days)</label>
                <input
                  id="express"
                  type="radio"
                  className="py-1 border-2 border-gray-400 rounded-md "
                />
              </span>
              <p>$19.99</p>
            </div>
          </fieldset>
        </section>
        <section className="flex flex-col p-4 border-2 border-gray-400 rounded-md">
          <fieldset>
            <legend className="text-lg font-bold">Payment</legend>
          </fieldset>
        </section>
      </form>
      <section className="py-1 border-2 border-gray-400 rounded-md ">
        <h2 className="font-bold">Order Summary</h2>
        <div className="flex flex-row justify-between">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Shipping (3-5 business days)</p>
          <p>$9.99</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Sales Tax:</p>
          <p>${tax}</p>
        </div>
        <p>Discounts</p>
        <div className="flex flex-row justify-between">
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
      </section>
    </main>
  );
}
