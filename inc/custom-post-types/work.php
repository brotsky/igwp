<?php
// Register Custom Post Type
function work_custom_post_type() {

	$labels = array(
		'name'                  => _x( 'Works', 'Post Type General Name', 'infinite_group' ),
		'singular_name'         => _x( 'Work', 'Post Type Singular Name', 'infinite_group' ),
		'menu_name'             => __( 'Works', 'infinite_group' ),
		'name_admin_bar'        => __( 'Work', 'infinite_group' ),
		'archives'              => __( 'Work Archives', 'infinite_group' ),
		'attributes'            => __( 'Work Attributes', 'infinite_group' ),
		'parent_item_colon'     => __( 'Parent Work:', 'infinite_group' ),
		'all_items'             => __( 'All Works', 'infinite_group' ),
		'add_new_item'          => __( 'Add New Work', 'infinite_group' ),
		'add_new'               => __( 'Add Work', 'infinite_group' ),
		'new_item'              => __( 'New Work', 'infinite_group' ),
		'edit_item'             => __( 'Edit Work', 'infinite_group' ),
		'update_item'           => __( 'Update Work', 'infinite_group' ),
		'view_item'             => __( 'View Work', 'infinite_group' ),
		'view_items'            => __( 'View Works', 'infinite_group' ),
		'search_items'          => __( 'Search Work', 'infinite_group' ),
		'not_found'             => __( 'Not found', 'infinite_group' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'infinite_group' ),
		'featured_image'        => __( 'Featured Image', 'infinite_group' ),
		'set_featured_image'    => __( 'Set featured image', 'infinite_group' ),
		'remove_featured_image' => __( 'Remove featured image', 'infinite_group' ),
		'use_featured_image'    => __( 'Use as featured image', 'infinite_group' ),
		'insert_into_item'      => __( 'Insert into work', 'infinite_group' ),
		'uploaded_to_this_item' => __( 'Uploaded to this work', 'infinite_group' ),
		'items_list'            => __( 'Works list', 'infinite_group' ),
		'items_list_navigation' => __( 'Works list navigation', 'infinite_group' ),
		'filter_items_list'     => __( 'Filter works list', 'infinite_group' ),
	);
	$args = array(
		'label'                 => __( 'Work', 'infinite_group' ),
		'description'           => __( 'Post Type Description', 'infinite_group' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'work', $args );

}
add_action( 'init', 'work_custom_post_type', 0 );


function get_work($id)
{
    $post = get_post($id);
    return new Work($post);
}

class Work
{
    public function __construct($post)
    {
        $this->ID = $post->ID;
        $this->title = $post->post_title;
        $this->content = $post->post_content;
        $this->url = get_permalink($this->ID);
        $this->meta = get_post_meta($this->ID);
        $this->gallery = get_field('gallery', $this->ID);
    }

    public function get_home_page_image()
    {
      if(sizeof($this->gallery) > 0)
        return $this->gallery[0]['image'];
      return false;
    }

    public function get_thumbnail($size)
    {
        return wp_get_attachment_image($this->thumbnail_id, $size);
    }

    public function get_thumbnail_url($size)
    {
        return get_the_post_thumbnail_url($this->ID, $size);
    }
}