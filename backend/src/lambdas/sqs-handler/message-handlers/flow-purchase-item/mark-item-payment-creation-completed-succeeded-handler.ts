export async function markItemPaymentCreationCompletedSucceededHandler(data: any) {
    const { item } = data;

    console.log('Create item payment completed', item);
}
