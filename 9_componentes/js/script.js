var popoverList1 = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

var popoverList2 = popoverList1.map(function (popoverElement) {
    return new bootstrap.Popover(popoverElement)
})

var tooltipList1 = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList2 = tooltipList1.map(function (tooltipElement) {
    return new bootstrap.Tooltip(tooltipElement)
})

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}