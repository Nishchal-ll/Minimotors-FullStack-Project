<!-- orders.blade.php -->

@if($orders->isEmpty())
    <p>No orders yet.</p>
@else
    <h2>Pending Orders</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($orders->where('status', 'pending') as $order)
                <tr>
                    <td>{{ $order->id }}</td>
                    <td>{{ $order->name }}</td>
                    <td>{{ $order->total }}</td>
                    <td>
                        <!-- Process Order -->
                        <form action="{{ route('orders.process', $order->id) }}" method="POST">
                            @csrf
                            <button type="submit">Process</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <h2>Processed Orders</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($orders->where('status', 'processed') as $order)
                <tr>
                    <td>{{ $order->id }}</td>
                    <td>{{ $order->name }}</td>
                    <td>{{ $order->total }}</td>
                    <td>
                        <!-- Deliver Order -->
                        <form action="{{ route('orders.deliver', $order->id) }}" method="POST" style="display:inline">
                            @csrf
                            <button type="submit">Deliver</button>
                        </form>
                        <!-- Refund / Out of Stock -->
                        <form action="{{ route('orders.refund', $order->id) }}" method="POST" style="display:inline">
                            @csrf
                            <button type="submit">Out of Stock</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <h2>Delivered Orders</h2>
    <ul>
        @foreach($orders->where('status', 'delivered') as $order)
            <li>#{{ $order->id }} - {{ $order->name }} - Delivered</li>
        @endforeach
    </ul>

    <h2>Refunded Orders</h2>
    <ul>
        @foreach($orders->where('status', 'refunded') as $order)
            <li>#{{ $order->id }} - {{ $order->name }} - Refunded</li>
        @endforeach
    </ul>
@endif
