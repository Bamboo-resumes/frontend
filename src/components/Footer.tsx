import bamboo_logo from '/bamboo_logo.png'

function Footer() {
  return (
    <div class="w-full mx-auto mt-10 "  >

	<footer class="p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800"  style={{backgroundColor: "#EEEEEE"}}>
		<div class="sm:flex sm:items-center sm:justify-between">
			<a href="/" target="_blank" class="flex items-center mb-4 sm:mb-0" >
				<img src={bamboo_logo} class="mr-4 "  height={'200'} width={'200'}/>
				
			</a>
			<ul class="flex flex-wrap items-center mb-6 sm:mb-0">
				<li>
					<a href="#" class="mr-4 text-sm text-black hover:underline md:mr-6 dark:text-gray-400">About</a>
				</li>
				<li>
					<a href="#" class="mr-4 text-sm text-black hover:underline md:mr-6 dark:text-gray-400">Privacy
						Policy</a>
				</li>
				<li>
					<a href="#"
						class="mr-4 text-sm text-black hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
				</li>
				<li>
					<a href="#" class="text-sm text-black hover:underline dark:text-gray-400">Contact</a>
				</li>
			</ul>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span class="block text-sm text-black sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" class="text-green-600 hover:underline">Bamboo Resumes</a>
    </span>
	</footer>


</div>
  );
}

export default Footer;