from django.shortcuts import render

# Create your views here.
def react_view(request):
    return render(request, 'template.js', context={
        'title': 'Django SSR',
        'count': 0,
        'color': 'red'
    })
