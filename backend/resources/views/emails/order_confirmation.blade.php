<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Order Confirmation</title>
</head>
<body>
    <h2>Thank you for your order, {{ $order->name }}!</h2>
    <p>Your order has been received successfully.</p>
    <p><strong>Total:</strong> Rs. {{ $order->total }}</p>

    <h4>Items:</h4>
    <ul>
        @foreach (json_decode($order->items) as $item)
            <li>{{ $item->name }} - {{ $item->quantity }} pcs</li>
        @endforeach
    </ul>

    <p>We’ll notify you once your order is being processed.</p>
</body>
</html>
