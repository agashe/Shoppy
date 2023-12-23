import Badge from 'react-bootstrap/Badge';

export default function StatusBadge({ status }) {
    let badgeTypes = {
        'pending': 'primary',
        'shipping': 'secondary',
        'done': 'success',
        'cancelled': 'danger'
    };

    return (
        status &&
        <Badge bg={ badgeTypes[status] } className="p-2">{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
    );
}