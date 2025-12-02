<table class="min-w-full border border-gray-300 rounded-lg overflow-hidden">
  <thead class="bg-gray-100">
    <tr>
      <th 
        class="px-4 py-2 border-b border-gray-300 text-left cursor-pointer hover:bg-gray-200 select-none"
        (click)="ordenar('idProyecto')">
        Id Proyecto {{ iconoOrden('idProyecto') }}
      </th>

      <th 
        class="px-4 py-2 border-b border-gray-300 text-left cursor-pointer hover:bg-gray-200 select-none"
        (click)="ordenar('nombreProyecto')">
        Nombre del Proyecto {{ iconoOrden('nombreProyecto') }}
      </th>

      <th 
        class="px-4 py-2 border-b border-gray-300 text-left cursor-pointer hover:bg-gray-200 select-none"
        (click)="ordenar('area')">
        Área {{ iconoOrden('area') }}
      </th>

      <th 
        class="px-4 py-2 border-b border-gray-300 text-left cursor-pointer hover:bg-gray-200 select-none"
        (click)="ordenar('objetivo')">
        Objetivo {{ iconoOrden('objetivo') }}
      </th>

      <th 
        class="px-4 py-2 border-b border-gray-300 text-left cursor-pointer hover:bg-gray-200 select-none"
        (click)="ordenar('comentarios')">
        Comentarios {{ iconoOrden('comentarios') }}
      </th>
    </tr>
  </thead>

  <tbody>
    <tr 
      *ngFor="let r of resultados"
      class="hover:bg-gray-50 transition">

      <td class="px-4 py-2 border-b border-gray-200">{{ r.idProyecto }}</td>
      <td class="px-4 py-2 border-b border-gray-200">{{ r.nombreProyecto }}</td>
      <td class="px-4 py-2 border-b border-gray-200">{{ r.area }}</td>
      <td class="px-4 py-2 border-b border-gray-200">{{ r.objetivo }}</td>
      <td class="px-4 py-2 border-b border-gray-200">{{ r.comentarios }}</td>
    </tr>
  </tbody>
</table>
