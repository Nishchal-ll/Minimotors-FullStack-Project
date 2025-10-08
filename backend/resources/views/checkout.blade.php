<!DOCTYPE html>
<html>
<head>
    <title>Checkout</title>
</head>
<body>
    <h2>Checkout Page</h2>

    <p>Welcome, {{ auth()->user()->name }}</p>

    <form method="POST" action="{{ route('checkout.process') }}">
        @csrf
        <label>Shipping Address:</label><br>
        <textarea name="address" required></textarea><br><br>

        <button type="submit">Place Order</button>
    </form>
</body>
</html>
